"use client";
import React, { useEffect,  useMemo, useRef , useState, use as usePromise } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getProjectBySlug } from "@/lib/projects";
import {
  Heart,
  Share2,
  MapPin,
  Ruler,
  Calendar,
  Building,
  Camera,
  CreditCard,
  X,
  ChevronLeft,
  ChevronRight,
  Waves,
  Dumbbell,
  Car,
  Shield,
  Sparkles,
  Coffee,
  Baby,
  Utensils,
  Download,
  FileText,
  Phone,
  CheckCircle2,
  Building2,
  Home,
  Percent,
  Link,
  ArrowRight,
} from "lucide-react";
import type { ElementType } from "react";
import { div } from "framer-motion/client";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { inputClass } from "@/app/utils/inputClass";
import { BASE_URL } from "@/lib/config";
import RegisterLeadForm from "@/app/Components/RegisterLeadForm";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ContentItem {
  type: "text" | "heading";
  content: string;
}

interface Amenity {
  name: string;
  icon: ElementType;
}

interface FloorPlan {
  type: string;
  size: string;
  price: string;
}

interface PaymentPlan {
  onBooking: number;
  onConstruction: number;
  onHandover: number;
}

interface ProjectData {
  title: string;
  location: string;
  price: string;
  startingSize: string;
  area: string;
  handover: string;
  mainImage: string;
  mapIframeUrl: string;
  developer: string;
  developerDescription: string;
  gallery: string[];
  amenities: Amenity[];
  highlights: string[];
  paymentPlan: PaymentPlan;
  locationDescription: string;
  floorPlans: FloorPlan[];
  description: ContentItem[];
}



  export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = usePromise(params);
  const cleanSlug = slug.replace(/\.html$/, "");
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [singleProject, setSingleProject] = useState<any>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const detailsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const floorplanRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);
  const brochureRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    details: detailsRef,
    gallery: galleryRef,
    floorplan: floorplanRef,
    amenities: amenitiesRef,
    location: locationRef,
    payment: paymentRef,
    brochure: brochureRef,
  };

//   const parseHTMLContent = (html: string) => {
//   if (!html) return [];
  
//   const contentItems: ContentItem[] = [];
//   const tempDiv = document.createElement('div');
  
//   // Remove span tags and their styles
//   const cleanedHtml = html
//     .replace(/<span[^>]*>/g, '')
//     .replace(/<\/span>/g, '')
//     .replace(/style="[^"]*"/g, '');
  
//   tempDiv.innerHTML = cleanedHtml;
  
//   const elements = Array.from(tempDiv.childNodes);
  
//   for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
    
//     if (element.nodeType === Node.ELEMENT_NODE) {
//       const el = element as Element;
      
//       if (el.tagName === 'H2') {
//         contentItems.push({
//           type: 'heading',
//           content: el.textContent?.trim() || ''
//         });
//       } else if (el.tagName === 'P') {
//         const text = el.textContent?.trim();
//         if (text) {
//           contentItems.push({
//             type: 'text',
//             content: text
//           });
//         }
//       } else if (el.tagName === 'UL') {
//         const items = el.querySelectorAll('li');
//         items.forEach(item => {
//           const text = item.textContent?.trim();
//           if (text) {
//             contentItems.push({
//               type: 'text',
//               content: `• ${text}`
//             });
//           }
//         });
//       } else if (el.tagName === 'DIV' || el.tagName === 'SPAN') {
//         // Handle nested content
//         const text = el.textContent?.trim();
//         if (text) {
//           contentItems.push({
//             type: 'text',
//             content: text
//           });
//         }
//       }
//     } else if (element.nodeType === Node.TEXT_NODE) {
//       const text = element.textContent?.trim();
//       if (text) {
//         contentItems.push({
//           type: 'text',
//           content: text
//         });
//       }
//     }
//   }
  
//   return contentItems;
// };


const parseHTMLContent = (html: string) => {
  if (!html) return [];

  const contentItems: ContentItem[] = [];
  const tempDiv = document.createElement('div');

  // Remove span tags and their styles
  const cleanedHtml = html
    .replace(/<span[^>]*>/g, '')
    .replace(/<\/span>/g, '')
    .replace(/style="[^"]*"/g, '');

  tempDiv.innerHTML = cleanedHtml;

  const elements = Array.from(tempDiv.childNodes);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (element.nodeType === Node.ELEMENT_NODE) {
      const el = element as Element;
      
      if (el.tagName === 'H2') {
        const text = el.textContent?.trim() || '';
        contentItems.push({
          type: 'heading',
          content: text
        });
      } else if (el.tagName === 'P') {
        const text = el.textContent?.trim() || '';
        if (text) {
          contentItems.push({
            type: 'text',
            content: text
          });
        }
      } else if (el.tagName === 'UL') {
        const items = el.querySelectorAll('li');
        items.forEach(item => {
          const text = item.textContent?.trim() || '';
          if (text) {
            contentItems.push({
              type: 'text',
              content: `• ${text}`
            });
          }
        });
      } else if (el.tagName === 'DIV' || el.tagName === 'SPAN') {
        // Handle nested content
        const text = el.textContent?.trim() || '';
        if (text) {
          contentItems.push({
            type: 'text',
            content: text
          });
        }
      }
    } else if (element.nodeType === Node.TEXT_NODE) {
      const text = element.textContent?.trim() || '';
      if (text) {
        contentItems.push({
          type: 'text',
          content: text
        });
      }
    }
  }

  return contentItems;
};


  //   useEffect(() => {
  //   const fetchProject = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await getProjectBySlug(cleanSlug);
        
  //       if (data.error) {
  //         throw new Error('Project not found');
  //       }

  //       console.log('Fetched project data:', data);

  //       setSingleProject(data);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : 'Failed to load project');
  //       console.error('Error fetching project:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProject();
  // }, [cleanSlug]);


  useEffect(() => {
  const fetchProject = async () => {
    try {
      setLoading(true);
      const data = await getProjectBySlug(cleanSlug);
      
      if (data.error) {
        throw new Error('Project not found');
      }

      // Parse the HTML description string into ContentItem array
      const parsedDescription = parseHTMLContent(data.description || '');
      
      setSingleProject({
        ...data,
        parsedDescription // Add the parsed description
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load project');
      console.error('Error fetching project:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchProject();
}, [cleanSlug]);


  const handleTabClick = (tabId: keyof typeof sectionRefs) => {
    setActiveTab(tabId);
    const ref = sectionRefs[tabId];
    if (ref?.current) {
      const offset = 60;
      const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const nextImage = () => setActiveGalleryImage((prev) => (prev === singleProject.gallery.length - 1 ? 0 : prev + 1));
  const prevImage = () => setActiveGalleryImage((prev) => (prev === 0 ? singleProject.gallery.length - 1 : prev - 1));


  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState<string>();
  
  
    const [errors, setErrors] = useState<{
      first?: string;
      last?: string;
      phone?: string;
      ok?: string;
    }>({});
  
    const isFormValid = useMemo(() => {
      return (
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        phone !== undefined &&
        phone !== "" &&
        isValidPhoneNumber(phone)
      );
    }, [firstName, lastName, phone]);
  
    const validatePhoneNumber = (phoneNumber: string | undefined): boolean => {
      if (!phoneNumber) return false;
      return isValidPhoneNumber(phoneNumber);
    };
  
    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      if (!isFormValid) return;
      const nextErrors: typeof errors = {};
      if (!firstName.trim()) nextErrors.first = "Please enter your first name.";
      if (!lastName.trim()) nextErrors.last = "Please enter your last name.";
      if (!phone) {
        nextErrors.phone = "Please enter your phone number.";
      } else if (!validatePhoneNumber(phone)) {
        nextErrors.phone =
          "Please enter a valid phone number for the selected country.";
      }
  
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length) return;
  
      try {
        setLoading(true);
  
        const formData = {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          phone: phone,
          source: "Website",
          timestamp: new Date().toISOString(),
        };
  
        const response = await fetch(`${BASE_URL}/get_website_lead`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
  
        if (!response.ok) {
          throw new Error(result.message || "Failed to submit form");
        }
  
        setErrors({ ok: "✅ Thank you! We'll reach out soon." });
        setFirstName("");
        setLastName("");
        setPhone("");
      } catch (error) {
        setErrors({
          phone:
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    }
  
    const handlePhoneChange = (value: string | undefined) => {
      setPhone(value);
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: undefined }));
      }
    };
  
    const handleInputChange =
      (setter: React.Dispatch<React.SetStateAction<string>>, field: string) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
        if (errors[field as keyof typeof errors]) {
          setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
      };
  


  const tabs: { id: keyof typeof sectionRefs; label: string }[] = [
    { id: "details", label: "Details" },
    { id: "gallery", label: "Gallery" },
    { id: "floorplan", label: "Floor Plan" },
    { id: "amenities", label: "Amenities" },
    { id: "location", label: "Location" },
    { id: "payment", label: "Payment Plan" },
    { id: "brochure", label: "Brochure" },
  ];


const renderContent = (content: ContentItem[]) => {
  return content.map((item, index) => {
    if (item.type === "heading") {
      return (
        <div key={index} className="flex items-center gap-2 mt-6 mb-3">
          <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
          <h3 className="text-base sm:text-lg font-medium text-gray-900">
            {typeof item.content === 'string' ? item.content : JSON.stringify(item.content)}
          </h3>
        </div>
      );
    }
    return (
      <p key={index} className="text-sm text-gray-600 leading-relaxed mb-3">
        {typeof item.content === 'string' ? item.content : JSON.stringify(item.content)}
      </p>
    );
  });
};


const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Grand Polo Club & Resort Townhouses",
          text: "Check out this project!",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share canceled", err);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  

  return (
    <main className="min-h-screen bg-white">
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-sm w-full max-w-md shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-[#c97a52] to-[#a85f3b] p-5 text-white relative">
                <button onClick={() => setIsFormOpen(false)} className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-medium">Get Project Details</h3>
                <p className="text-white/80 text-sm mt-1">Fill the form & our expert will contact you</p>
              </div>

              <div className="p-5">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="flex flex-col justify-center"
                >
                  <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md mx-auto space-y-6"
                  >
                    {/* First + Last Name */}
                    {[
                      {
                        label: "First Name *",
                        value: firstName,
                        setter: setFirstName,
                        field: "first",
                        err: errors.first,
                      },
                      {
                        label: "Last Name *",
                        value: lastName,
                        setter: setLastName,
                        field: "last",
                        err: errors.last,
                      },
                    ].map(({ label, value, setter, field, err }, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                      >
                        <input
                          type="text"
                          placeholder={label}
                          value={value}
                          onChange={handleInputChange(setter, field)}
                          className={inputClass(err)}
                        />
                        {err && <p className="text-sm text-red-500 mt-1">{err}</p>}
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <div className={`phone-input-custom ${errors.phone ? "error" : ""}`}>
                        <PhoneInput
                          international
                          defaultCountry="AE"
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="Enter phone number"
                        />
                      </div>

                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                      )}

                      {phone && !errors.phone && (
                        <p
                          className={`text-xs mt-1 ${
                            validatePhoneNumber(phone)
                              ? "text-emerald-600"
                              : "text-amber-600"
                          }`}
                        >
                          {validatePhoneNumber(phone)
                            ? "✓ Valid phone number format"
                            : "⚠ Please check the number format for the selected country"}
                        </p>
                      )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={
                        isFormValid
                          ? {
                              scale: 1.06,
                              boxShadow: "0px 10px 25px rgba(201, 122, 82, 0.5)",
                            }
                          : {}
                      }
                      whileTap={isFormValid ? { scale: 0.95 } : {}}
                      transition={{ type: "spring", stiffness: 200 }}
                      type="submit"
                      disabled={!isFormValid || loading}
                      className={`relative overflow-hidden bg-gradient-to-r from-[#c97a52] via-[#b06c48] to-[#8b5d3b] inline-flex h-12 w-full items-center justify-center rounded-sm text-[15px] text-white transition-all duration-200 ${
                        !isFormValid || loading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:shadow-lg"
                      }`}
                    >
                      {loading ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit
                          <motion.span
                            animate={isFormValid ? { x: [0, 5, 0] } : { x: 0 }}
                            transition={
                              isFormValid
                                ? { repeat: Infinity, duration: 1.4, ease: "easeInOut" }
                                : {}
                            }
                            className="ml-2 inline-block"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </>
                      )}
                    </motion.button>

                    {/* Success Message */}
                    {errors.ok && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-emerald-600 text-center"
                      >
                        {errors.ok}
                      </motion.p>
                    )}

                    {/* Privacy Policy */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                      className="text-xs text-gray-500 text-center"
                    >
                      By submitting this form, you agree to our{" "}
                    </motion.p>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="bg-[#f9f5f0] border-b border-[#e8dfd4] py-2">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            <nav className="text-xs text-gray-500 flex items-center flex-wrap gap-1">
              <span className="hover:text-[#c97a52] cursor-pointer transition-colors">Off Plan Projects</span>
              <span className="text-gray-300">›</span>
              <span className="text-gray-700">
                {typeof singleProject?.name === 'string' ? singleProject?.name : 'Project'}
              </span>
            </nav>

            <div className="flex items-center gap-2">
              <button  onClick={handleShare} className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-sm hover:border-gray-300 transition-all cursor-pointer">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
              <button onClick={() => setIsFormOpen(true)} className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-[#c97a52] rounded-sm hover:bg-[#b56a42] transition-all">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-3 mt-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            <div className="relative h-[260px] sm:h-[320px] lg:h-[450px] lg:col-span-9 w-full overflow-hidden rounded-sm">
              {/* Circular Loader */}
              {!singleProject?.main_image_loaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-gray-100/70">
                  <div className="w-20 h-20 border-2 border-gray-300 border-t-[#c97a52] rounded-full animate-spin"></div>
                </div>
              )}
              <Image
                src={singleProject?.main_image || "/placeholder.jpg"} 
                alt={singleProject?.name || "Project Image"} 
                fill 
                className={`object-cover transition-opacity duration-700 ${singleProject?.main_image_loaded ? "opacity-100" : "opacity-0"}`}
                onLoadingComplete={() =>
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  setSingleProject((prev: any) => ({ ...prev, main_image_loaded: true }))
                }
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <button onClick={() => setIsFavorite(!isFavorite)} className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md transition-all ${isFavorite ? "bg-red-500 text-white" : "bg-black/30 text-white hover:bg-black/40"}`}>
                <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
              </button>
              <button onClick={() => setIsModalOpen(true)} className="absolute top-3 left-3 z-20 p-2 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/40 transition-all flex items-center gap-1.5">
                <Camera className="w-4 h-4" />
                <span className="text-xs font-medium">{singleProject?.gallery?.length || 0}</span>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4"></div>
            </div>

            <div className="relative h-[180px] sm:h-[220px] lg:h-[450px] lg:col-span-3 w-full overflow-hidden rounded-sm">              
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.468972107661!2d55.26149851188493!3d25.18239884203875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1765184199009!5m2!1sen!2sae" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 w-full h-full" /> 
            </div>
          </div>
        </div>
      </section>
       <section className="bg-[#faf8f5] py-2.5 border-b border-gray-100 mt-3">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {[
              { icon: CreditCard, label: "Starting Price", value: singleProject?.starting_price },
              { icon: Ruler, label: "Price Per/Sq.ft", value: singleProject?.pricepersqft },
              { icon: Ruler, label: "Starting Size", value: singleProject?.starting_size },
              {
                icon: MapPin,
                label: "Location",
                value:
                  typeof singleProject?.location === "object"
                    ? singleProject?.location?.name
                    : singleProject?.location || "N/A"
              },
              {
                icon: Building,
                label: "Developer",
                value:
                  typeof singleProject?.developer === "object"
                    ? singleProject?.developer?.name
                    : singleProject?.developer || "N/A"
              },

              { icon: Calendar, label: "Completion", value: singleProject?.handover_date },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="p-1.5 rounded-sm bg-[#c97a52]/10 flex-shrink-0">
                  <item.icon className="w-3.5 h-3.5 text-[#c97a52]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wide truncate">{item.label}</p>
                  <p className="text-[11px] sm:text-xs font-medium text-gray-900 truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section className="bg-white border-y border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar -mx-4 px-4 py-2 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                  activeTab === tab.id
                    ? "text-[#c97a52] border-[#c97a52]"
                    : "text-gray-500 border-transparent hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section ref={detailsRef} className="py-6 sm:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <div className="lg:col-span-8">
            <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
              {singleProject?.name}
            </h2>
            <div className="bg-[#faf8f5] rounded-sm p-4 sm:p-5 border border-[#f0ebe4] prose prose-sm max-w-none">
              {singleProject?.parsedDescription && Array.isArray(singleProject.parsedDescription) && singleProject.parsedDescription.length > 0 ? (
                singleProject.parsedDescription.map((item: { type: string; content: React.ReactNode; }, index: React.Key | null | undefined) => {
                  if (item.type === 'heading') {
                    return (
                      <div key={index} className="flex items-center gap-2 mt-6 mb-3">
                        <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
                        <h3 className="text-base font-medium text-gray-900">
                          {typeof item.content === 'string' ? item.content : ''}
                        </h3>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="text-sm text-gray-600 leading-relaxed mb-3">
                      {typeof item.content === 'string' ? item.content : ''}
                    </p>
                  );
                })
              ) : (
                <div dangerouslySetInnerHTML={{ __html: singleProject?.description || '' }} />
              )}
            </div>
          </div>
          <div className="lg:col-span-4 lg:sticky lg:top-16 lg:self-start space-y-3">
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, ease: "easeOut" }} className="p-6 md:p-12 flex flex-col justify-center"
                  >    
                   {/* <RegisterLeadForm
                      fullName={fullName}
                      email={email}
                      phone={phone}
                      errors={errors}
                      loading={loading}
                      isFormValid={isFormValid}
                      handleSubmit={handleSubmit}
                      handlePhoneChange={handlePhoneChange}
                      handleInputChange={handleInputChange}
                      validatePhoneNumber={validatePhoneNumber}
                      setFullName={setFullName}
                      setEmail={setEmail}
                    /> */}
                </motion.div>
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="px-10 flex flex-col justify-center"
                  >  
                  <hr />
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, ease: "easeOut" }} className="p-6 md:p-12 flex flex-col justify-center">  
                  <div className="grid grid-cols-2 gap-2 mt-4">
                      <a href="tel:+971527469500" className="flex items-center justify-center gap-1.5 py-2 border border-gray-200 rounded-sm text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        <Phone className="w-3.5 h-3.5" /> Call Us
                      </a>
                      <a href="https://wa.me/971527469500" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 py-2 border border-green-500 rounded-sm text-xs font-medium text-green-600 hover:bg-green-50 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </motion.div>
            </div>
        </div>
      </div>
    </section> 
    <section ref={galleryRef} className="py-6 sm:py-8 bg-[#faf8f5]">
      <div className="container mx-auto px-4 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
          <h3 className="text-base sm:text-lg font-medium text-gray-900">Project Gallery</h3>
        </div>
      </div>
       {singleProject?.gallery && singleProject.gallery.length > 0 ? (
        <>
          <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] overflow-hidden cursor-pointer mb-3" onClick={() => setIsModalOpen(true)}>
            <Image 
              src={singleProject.gallery[activeGalleryImage] || "/placeholder.jpg"} 
              alt={`Gallery ${activeGalleryImage + 1}`} 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-xs font-medium">Click to expand</p>
            </div>
            <div className="absolute top-3 right-3 bg-black/50 text-white px-2.5 py-1 rounded-full text-xs backdrop-blur-sm">
              {activeGalleryImage + 1} / {singleProject.gallery.length}
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }} 
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }} 
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {singleProject.gallery.map((image: string, index: number) => (
                <button 
                  key={index} 
                  onClick={() => setActiveGalleryImage(index)} 
                  className={`relative flex-shrink-0 w-20 h-14 sm:w-28 sm:h-18 rounded overflow-hidden border-2 transition-all ${index === activeGalleryImage ? "border-[#c97a52] opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <Image src={image} alt={`Thumb ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="container mx-auto px-4">
          <div className="text-center py-8">
            <Camera className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No gallery images available</p>
          </div>
        </div>
      )}
    </section>
    <section ref={floorplanRef} className="py-6 sm:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900">Floor Plans</h3>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-sm text-xs font-medium text-gray-700 hover:bg-gray-50 transition-all"
            >
              <FileText className="w-3 h-3" /> View All
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#c97a52] text-white rounded-sm text-xs font-medium hover:bg-[#b56a42] transition-all"
            >
              <Download className="w-3 h-3" /> Download
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">

          <div
            className="bg-[#faf8f5] rounded-sm overflow-hidden border border-[#f0ebe4] group cursor-pointer hover:shadow-md transition-all"
            onClick={() => setIsFormOpen(true)}
          >
            <div className="h-24 sm:h-28 bg-gradient-to-br from-[#f0ebe4] to-[#e8dfd4] flex items-center justify-center">
              <Home className="w-8 h-8 sm:w-10 sm:h-10 text-[#c97a52]/40 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-2.5 sm:p-3">
              <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-0.5">1 Bedroom</h4>
              <p className="text-[10px] sm:text-xs text-gray-500">650 sq ft</p>
              <p className="text-[10px] sm:text-xs text-[#c97a52] font-medium mt-0.5">AED 1.2M</p>
            </div>
          </div>
          <div
            className="bg-[#faf8f5] rounded-sm overflow-hidden border border-[#f0ebe4] group cursor-pointer hover:shadow-md transition-all"
            onClick={() => setIsFormOpen(true)}
          >
            <div className="h-24 sm:h-28 bg-gradient-to-br from-[#f0ebe4] to-[#e8dfd4] flex items-center justify-center">
              <Home className="w-8 h-8 sm:w-10 sm:h-10 text-[#c97a52]/40 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-2.5 sm:p-3">
              <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-0.5">2 Bedroom</h4>
              <p className="text-[10px] sm:text-xs text-gray-500">950 sq ft</p>
              <p className="text-[10px] sm:text-xs text-[#c97a52] font-medium mt-0.5">AED 1.8M</p>
            </div>
          </div>
          <div
            className="bg-[#faf8f5] rounded-sm overflow-hidden border border-[#f0ebe4] group cursor-pointer hover:shadow-md transition-all"
            onClick={() => setIsFormOpen(true)}
          >
            <div className="h-24 sm:h-28 bg-gradient-to-br from-[#f0ebe4] to-[#e8dfd4] flex items-center justify-center">
              <Home className="w-8 h-8 sm:w-10 sm:h-10 text-[#c97a52]/40 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-2.5 sm:p-3">
              <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-0.5">3 Bedroom</h4>
              <p className="text-[10px] sm:text-xs text-gray-500">1200 sq ft</p>
              <p className="text-[10px] sm:text-xs text-[#c97a52] font-medium mt-0.5">AED 2.4M</p>
            </div>
          </div>

          <div
            className="bg-[#faf8f5] rounded-sm overflow-hidden border border-[#f0ebe4] group cursor-pointer hover:shadow-md transition-all"
            onClick={() => setIsFormOpen(true)}
          >
            <div className="h-24 sm:h-28 bg-gradient-to-br from-[#f0ebe4] to-[#e8dfd4] flex items-center justify-center">
              <Home className="w-8 h-8 sm:w-10 sm:h-10 text-[#c97a52]/40 group-hover:scale-110 transition-transform" />
            </div>
            <div className="p-2.5 sm:p-3">
              <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-0.5">Studio</h4>
              <p className="text-[10px] sm:text-xs text-gray-500">450 sq ft</p>
              <p className="text-[10px] sm:text-xs text-[#c97a52] font-medium mt-0.5">AED 850K</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* <section ref={floorplanRef} className="py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900">Floor Plans</h3>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsFormOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-sm text-xs font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                <FileText className="w-3 h-3" /> View All
              </button>
              <button
                onClick={() => setIsFormOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#c97a52] text-white rounded-sm text-xs font-medium hover:bg-[#b56a42] transition-all"
              >
                <Download className="w-3 h-3" /> Download
              </button>
            </div>
          </div>

          {projectData?.floorPlans?.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
              {projectData.floorPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-[#faf8f5] rounded-sm overflow-hidden border border-[#f0ebe4] group cursor-pointer hover:shadow-md transition-all"
                  onClick={() => setIsFormOpen(true)}
                >
                  <div className="h-24 sm:h-28 bg-gradient-to-br from-[#f0ebe4] to-[#e8dfd4] flex items-center justify-center">
                    <Home className="w-8 h-8 sm:w-10 sm:h-10 text-[#c97a52]/40 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-2.5 sm:p-3">
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-0.5">{plan.type}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500">{plan.size}</p>
                    <p className="text-[10px] sm:text-xs text-[#c97a52] font-medium mt-0.5">{plan.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 bg-[#faf8f5] p-3 border border-[#f0ebe4] rounded-sm">
              No floor plans found. Please add from admin panel.
            </p>
          )}
        </div>
      </section> */}

     <section ref={amenitiesRef} className="py-6 sm:py-8 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900">Amenities</h3>
          </div>
          {singleProject?.amenities?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              
              {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              singleProject.amenities.map((amenity: { icon: any; name: React.ReactNode}, index: React.Key | null | undefined) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2.5 sm:p-3 bg-white border border-[#f0ebe4] rounded-sm hover:shadow-sm transition-all"
                  >
                    <div className="p-1.5 bg-[#c97a52]/10 rounded-sm">
                      <Icon className="w-3.5 h-3.5 text-[#c97a52]" />
                    </div>
                    <span className="text-xs text-gray-700">{amenity.name}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-500 bg-white p-3 border border-[#f0ebe4] rounded-sm">
              No amenities found. Please add from CRM.
            </p>
          )}
        </div>
      </section>
      
      <section className="py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900">Highlights</h3>
          </div>
          {singleProject?.highlights?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {singleProject.highlights.map((highlight: {id: number, name: string | null}, index: number) => (
                <div key={index} className="flex items-start gap-2 p-2.5 sm:p-3 bg-[#faf8f5] border border-[#f0ebe4] rounded-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#c97a52] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-600">
                    {highlight.name || `Highlight ${highlight.id}`}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 bg-[#faf8f5] p-3 border border-[#f0ebe4] rounded-sm">
              No highlights found. Please add from CRM.
            </p>
          )}
        </div>
      </section>

       <section ref={locationRef} className="py-6 sm:py-8 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900">About Location</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <div className="space-y-3">
              
              <p className="text-sm text-gray-600 leading-relaxed"  dangerouslySetInnerHTML={{ __html: singleProject?.location?.description || '' }} ></p>
              {/* <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Airport", value: "30 min" },
                  { label: "Downtown", value: "25 min" },
                  { label: "Nakheel Mall", value: "5 min" },
                  { label: "Aquaventure", value: "10 min" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2.5 bg-white rounded-sm border border-[#f0ebe4]">
                    <MapPin className="w-3 h-3 text-[#c97a52]" />
                    <div>
                       <p className="text-[9px] text-gray-400 uppercase">{item.label}</p>
                       <p className="text-xs font-medium text-gray-900">{item.value}</p> 
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
            <div className="h-[200px] sm:h-[250px] rounded-sm overflow-hidden">
              {/* <iframe src={projectData.mapIframeUrl} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" /> */}
            </div>
          </div>
        </div>
      </section> 
         <section ref={paymentRef} className="py-6 sm:py-8 bg-gradient-to-br from-[#c97a52] to-[#a85f3b]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-normal text-white mb-1">Payment Plan</h3>
              <p className="text-white/70 text-xs">Flexible payment options</p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto">
              {[
                { icon: Home,  value: singleProject?.on_booking || 0, label: "On Booking" },
                { icon: Building2, value: singleProject?.on_construction || 0, label: "Construction" },
                { icon: Percent, value: singleProject?.on_handover || 0, label: "On Handover" },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-sm p-3 sm:p-5 text-center border border-white/20">
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 mb-2">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">{item.value}%</div>
                  <div className="text-white/80 text-[10px] sm:text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
       </section>   
       <section ref={brochureRef} className="py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900">Download Brochure</h3>
          </div>
          <div className="bg-[#faf8f5] rounded-sm p-4 sm:p-6 border border-[#f0ebe4] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-0.5">Get the Complete Project Brochure</h4>
              <p className="text-xs text-gray-500">Download detailed floor plans, pricing, and specifications</p>
            </div>
            <button onClick={() => setIsFormOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-[#c97a52] text-white rounded-sm text-xs font-medium hover:bg-[#b56a42] transition-all whitespace-nowrap cursor-pointer ">
              <Download className="w-3.5 h-3.5" /> Download Now
            </button>
          </div>
        </div>
      </section> 
      
      <section className="py-6 sm:py-8 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#c97a52] rounded-full"></div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900">About Developer</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: singleProject?.developer?.description || '' }}></p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Experience", value: "15+ yrs" },
                  { label: "Projects", value: "30+" },
                  { label: "Homes", value: "10,000+" },
                  { label: "Awards", value: "25+" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-2.5 bg-white rounded-sm border border-[#f0ebe4]">
                    <p className="text-base sm:text-lg font-light text-[#c97a52]">{stat.value}</p>
                    <p className="text-[9px] text-gray-400 uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#f0ebe4] to-[#e8dfd4] rounded-sm p-5 text-center">
              <div className="w-14 h-14 mx-auto mb-2 bg-white rounded-full flex items-center justify-center shadow">
                <Building className="w-6 h-6 text-[#c97a52]" />
              </div>
                <h4 className="text-sm font-medium text-gray-900">
                  {typeof singleProject?.developer === 'object' ? singleProject?.developer?.name : singleProject?.developer}
                </h4>
              <p className="text-[10px] text-gray-500 mt-0.5">Award-Winning Developer</p>
            </div>
          </div>
        </div>
      </section>  
      
       <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setIsModalOpen(false)}>
            <button className="absolute top-3 right-3 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-3 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="relative w-[95vw] h-[90vh]">
              <Image 
                src={singleProject.gallery[activeGalleryImage]} 
                alt="Full view" 
                fill 
                className="object-contain" 
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-3 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {activeGalleryImage + 1} / {singleProject.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence> 

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
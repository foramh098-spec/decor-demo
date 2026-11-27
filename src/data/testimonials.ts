import { type Language } from "@/context/LanguageContext";

export interface Testimonial {
  id: string;
  name: string;
  projectType: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah & James Miller",
    projectType: "Wedding Celebration",
    quote: "The decor completely transformed our venue. Every detail was beautiful, and our guests couldn't stop talking about it. The floral arrangements were exactly what we had dreamed of."
  },
  {
    id: "2",
    name: "Priya Sharma",
    projectType: "Engagement Party",
    quote: "Working with this team was a seamless experience. They understood the elegant aesthetic I wanted and executed it flawlessly. The ambient lighting made the evening feel incredibly magical."
  },
  {
    id: "3",
    name: "Elena Rostova",
    projectType: "Corporate Gala",
    quote: "Their approach to corporate events is refreshingly creative. They designed an environment for our guests that felt both professional and highly celebratory. The attention to detail was outstanding."
  }
];

const testimonialsGu: Record<string, Testimonial> = {
  "1": {
    id: "1",
    name: "સારા અને જેમ્સ મિલર",
    projectType: "લગ્ન ઉજવણી",
    quote: "ડેકોરે અમારા સમગ્ર સ્થળને જાદુઈ સ્વરૂપ આપી દીધું. દરેક વિગત અદ્ભુત હતી અને અમારા મહેમાનો તેની પ્રશંસા કરતાં થાકતા નહોતા. ફૂલોની સજાવટ બિલકુલ અમારા સપના મુજબ હતી.",
  },
  "2": {
    id: "2",
    name: "પ્રિયા શર્મા",
    projectType: "સગાઈ પાર્ટી",
    quote: "આ ટીમ સાથે કામ કરવાનો અનુભવ ખૂબ જ સરળ રહ્યો. તેમણે મારી પસંદગીની ભવ્ય શૈલીને સમજીને અદ્ભુત અમલ કર્યો. એમ્બિયન્ટ લાઇટિંગે સાંજને યાદગાર બનાવી દીધી.",
  },
  "3": {
    id: "3",
    name: "એલેના રોસ્ટોવા",
    projectType: "કોર્પોરેટ ગાલા",
    quote: "કોર્પોરેટ ઇવેન્ટ્સ માટે તેમનો અભિગમ અત્યંત ક્રિએટિવ છે. તેમણે એવું વાતાવરણ ઊભું કર્યું જે પ્રોફેશનલ અને ઉત્સવમય બંને લાગ્યું.",
  },
};

export function getLocalizedTestimonial(testimonial: Testimonial, lang: Language): Testimonial {
  if (lang !== "gu") return testimonial;
  return testimonialsGu[testimonial.id] ?? testimonial;
}

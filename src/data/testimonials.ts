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

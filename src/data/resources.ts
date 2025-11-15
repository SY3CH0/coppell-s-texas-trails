export interface Resource {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  services: string[];
  featured: boolean;
}

export const categories = [
  "All Resources",
  "Non-Profits",
  "Health Services",
  "Education",
  "Community Programs",
  "Support Services",
  "Youth Services",
  "Senior Services",
  "Emergency Services"
];

export const resources: Resource[] = [
  {
    id: "1",
    name: "Coppell Community Foundation",
    category: "Non-Profits",
    description: "Supporting Coppell residents through charitable programs, scholarships, and community initiatives that make a lasting impact.",
    address: "255 Parkway Blvd, Coppell, TX 75019",
    phone: "(972) 304-3673",
    website: "https://coppellcf.org",
    hours: "Mon-Fri: 9AM-5PM",
    services: ["Scholarships", "Community Grants", "Volunteer Programs", "Youth Support"],
    featured: true
  },
  {
    id: "2",
    name: "Coppell Family YMCA",
    category: "Health Services",
    description: "Building healthy spirits, minds, and bodies for all through fitness programs, youth development, and community wellness.",
    address: "700 S MacArthur Blvd, Coppell, TX 75019",
    phone: "(972) 462-1000",
    website: "https://ymcadallas.org/coppell",
    hours: "Mon-Fri: 5AM-10PM, Sat-Sun: 7AM-8PM",
    services: ["Fitness Classes", "Swimming", "Youth Programs", "Child Care"],
    featured: true
  },
  {
    id: "3",
    name: "Coppell Senior Center",
    category: "Senior Services",
    description: "Enriching lives of seniors through social activities, wellness programs, and support services in a welcoming environment.",
    address: "345 Freeport Pkwy, Coppell, TX 75019",
    phone: "(972) 304-3411",
    website: "https://coppelltx.gov/senior",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["Social Activities", "Health Screenings", "Exercise Classes", "Transportation"],
    featured: true
  },
  {
    id: "4",
    name: "Coppell Public Library",
    category: "Education",
    description: "Your community hub for learning, discovery, and connection with extensive resources and programs for all ages.",
    address: "177 N Heartz Rd, Coppell, TX 75019",
    phone: "(972) 304-3658",
    website: "https://coppelllibrary.org",
    hours: "Mon-Thu: 10AM-9PM, Fri-Sat: 10AM-6PM, Sun: 1PM-6PM",
    services: ["Book Lending", "Digital Resources", "Programs", "Study Rooms"],
    featured: false
  },
  {
    id: "5",
    name: "Metrocrest Services",
    category: "Support Services",
    description: "Providing food, financial assistance, and support services to families in need throughout the Metrocrest area.",
    address: "13801 Hutton Dr, Farmers Branch, TX 75234",
    phone: "(972) 446-2100",
    website: "https://metrocrestservices.org",
    hours: "Mon-Fri: 9AM-5PM",
    services: ["Food Pantry", "Financial Assistance", "Career Services", "Mental Health Support"],
    featured: false
  },
  {
    id: "6",
    name: "Coppell Fire Department",
    category: "Emergency Services",
    description: "Protecting lives and property through professional fire suppression, emergency medical services, and community education.",
    address: "800 W Main St, Coppell, TX 75019",
    phone: "Emergency: 911, Non-Emergency: (972) 304-3500",
    website: "https://coppelltx.gov/fire",
    hours: "24/7 Emergency Services",
    services: ["Fire Protection", "EMS", "Safety Education", "Fire Inspections"],
    featured: false
  },
  {
    id: "7",
    name: "Coppell Youth Sports",
    category: "Youth Services",
    description: "Fostering teamwork, character, and athletic skills through organized youth sports programs and leagues.",
    address: "255 Parkway Blvd, Coppell, TX 75019",
    phone: "(972) 304-3673",
    website: "https://copppellyouthsports.org",
    hours: "Seasonal Programs",
    services: ["Baseball", "Soccer", "Basketball", "Flag Football"],
    featured: false
  },
  {
    id: "8",
    name: "Coppell Nature Park",
    category: "Community Programs",
    description: "Experience nature with walking trails, wildlife viewing, and environmental education in the heart of Coppell.",
    address: "465 Bethel Rd, Coppell, TX 75019",
    phone: "(972) 304-3618",
    website: "https://coppelltx.gov/parks",
    hours: "Dawn to Dusk Daily",
    services: ["Nature Trails", "Bird Watching", "Educational Programs", "Photography"],
    featured: false
  },
  {
    id: "9",
    name: "Coppell Farmers Market",
    category: "Community Programs",
    description: "Supporting local farmers and artisans while bringing fresh, quality products to the Coppell community.",
    address: "768 W Main St, Coppell, TX 75019",
    phone: "(972) 304-3618",
    website: "https://coppellfarmersmarket.org",
    hours: "Saturdays: 8AM-12PM (Seasonal)",
    services: ["Fresh Produce", "Local Crafts", "Live Music", "Community Events"],
    featured: false
  },
  {
    id: "10",
    name: "Coppell Mental Health Services",
    category: "Health Services",
    description: "Compassionate mental health support and counseling services for individuals and families facing life's challenges.",
    address: "Confidential Location in Coppell",
    phone: "(972) 304-6000",
    website: "https://coppellmh.org",
    hours: "Mon-Fri: 8AM-7PM, Sat: 9AM-2PM",
    services: ["Individual Therapy", "Family Counseling", "Crisis Support", "Group Therapy"],
    featured: false
  },
  {
    id: "11",
    name: "Coppell Arts Center",
    category: "Community Programs",
    description: "Celebrating creativity through art exhibitions, classes, and performances that enrich our community's cultural life.",
    address: "505 Travis St, Coppell, TX 75019",
    phone: "(972) 304-7047",
    website: "https://coppellarts.org",
    hours: "Tue-Sat: 10AM-6PM",
    services: ["Art Classes", "Exhibitions", "Theater Productions", "Community Events"],
    featured: true
  },
  {
    id: "12",
    name: "Coppell Community Services",
    category: "Support Services",
    description: "Connecting residents with essential resources and assistance programs to strengthen our community.",
    address: "255 Parkway Blvd, Coppell, TX 75019",
    phone: "(972) 304-3673",
    website: "https://coppelltx.gov/services",
    hours: "Mon-Fri: 8AM-5PM",
    services: ["Utility Assistance", "Housing Support", "Job Resources", "Community Navigation"],
    featured: false
  }
];

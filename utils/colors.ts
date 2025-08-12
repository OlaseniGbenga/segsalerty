export const colors = {
  // Greens
  'green-primary': ['#08C550'],
  'green-light': ['#0F923780'], 
  'green-v-light': ['#0879521A'], 
  
  // Whites
  'white-primary': ['#FFFFFF'],
  'white-light': ['#F5F5F5'],
  
  // Blacks
  'black-primary': ['#000000'],
  'black-light': ['#00000033'], 
};

// Type for your specific color names
export type AppColor = keyof typeof colors;
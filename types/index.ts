interface ResourceType {
  id: string; 
  name: string;
  description?: string; 
  createdAt: string; 
  category: string; 
}

interface Category {
  id: string;         
  name: string;        
  userId: string;  
}
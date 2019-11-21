module.exports = 

{

    ConvertToBinary: (num) => 

    {
      
        if (num >= 0)
        
        {
            let result = "";
      
            num = Math.round(num); 
            
            
            while(num > 0) 
            
            {
            
                result += num % 2; 
            
                num = Math.floor(num/2);
            
            }
            
            result = (result) ? result : "0"; //  if num = 0
            
            
            return [...result].reverse().join(''); // Reverse the result
        
        }
        
        return false
    
    },

    ConvertToHexa: (num) => 
    
    {
    
       if (num >= 0)
       
       {
        
        let result = "";
        
            num = Math.round(num); // in case of non integers
            
                while(num > 0) {
                
                // representing the reminder in letter

                switch(num % 16)
                
                {

                    case 10:

                        result += "A";

                        break;

                    case 11:

                        result += "B";

                        break;

                    case 12:

                        result += "C";

                        break;
                    
                    case 13:
                      
                        result += "D";
                      
                        break;
                    
                    case 14:
                        
                        result += "E";
                        
                        break;

                    case 15:

                        result += "F";

                        break;

                    default: 

                        result += num % 16; // when remainders smaller than 10
                }
                num = Math.floor(num/16);
            }
            result = (result) ? result : "0"; // Case if num = 0
            return [...result].reverse().join(''); // Reverse result
        }
        return false
    }
}
import { log } from 'console'
import fs from 'fs'
// console.log(fs);
// fs.writeFile("newfile.txt",'This is my first file in Node',(error)=>{
//     if(error)
//     {
//         console.log('File Not created Error',error);
//         return
        
//     }
//     console.log('File Created Successfully');
    

// })
// fs.readFile("newfile.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//        console.log('File cant read Error',error);
//         return
       
//     }
//     console.log(data);
    
// })
// fs.appendFile("newfile.txt","New files are added",(error)=>{
//   if(error)
//     {
//        console.log('File Not updated Error',error);
//         return
       
//     }
//     console.log('File Updated Successfully');  
// })
// fs.unlink("newfile.txt",(error)=>{
//     if(error)
//     {
//        console.log('File Not deleted Error',error);
//         return
       
//     }
//     console.log('File deleted Successfully')

// })
fs.writeFile("secondfile.txt","This is my second node file",(error)=>{
    if(error)
    {
       console.log('File Not updated Error',error);
        return
       
    }
  console.log('File Created Successfully')
})
fs.readFile("secondfile.txt","utf-8",(error,data)=>{
    if(error)
    {
        console.log('Error occurs in reading the file')
    }
    console.log(data)
})
fs.appendFile("second.txt","Content added to the second file",(error)=>{
    if(error)
    {
        console.log('Error in updating the file')
    }
    console.log('File Updated Successfully')
})
fs.readFile("second.txt","utf-8",(error,data)=>{
     if(error)
    {
        console.log('Error in reading the file')
    }
    console.log(data);
    
})
import { UploadedFile } from 'express-fileupload';

 class CustomerModal{
        id :number;
        customer_name :string;
        customer_adress:string;
        part_id:number;
        customerPhone: string;
        imageName:string;
        image: UploadedFile;
        
}

export default CustomerModal;
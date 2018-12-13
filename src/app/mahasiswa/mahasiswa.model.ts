export class Mahasiswa
{
    public imagePath:string;
    public name:string;
    public jurusan:string;
    public email:string;
    public alamat:string;
    public ukt:string;
    

    constructor(imagePath:string,name:string,jurusan:string,email:string,alamat:string,ukt:string)
    {
        this.imagePath=imagePath;
        this.name=name;
        this.jurusan=jurusan;
        this.email=email;
        this.alamat=alamat;
        this.ukt=ukt;
        
    }

}
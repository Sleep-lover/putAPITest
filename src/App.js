import React ,{useState} from 'react';

const App = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) =>{
        const file=e.target.files[0]
        setSelectedFile(file);
        console.log(file.type);
        

    }
    const uploadFile = (file) => {
       
        const formData=new FormData();
        formData.append('file',file);
        const PutEndPoint='https://4wyy601qmj.execute-api.ap-south-1.amazonaws.com/devCited/cited-file-storage';
        const filename=file.name;
            fetch(`${PutEndPoint}/${filename}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/pdf',
                },
                body :formData
            }) .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));

    }


    return <>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </>
}
export default App;

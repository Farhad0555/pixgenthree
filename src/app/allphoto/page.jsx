import PhotoCard from "@/Component/PhotoCard/PhotoCard";

const allphotopage = async() => {
    const res = await fetch(`https://pixgenthree.vercel.app/data.json`);
    const photos = await res.json();
    return (
        <div className="grid grid-cols-4 gap-5 m-3 p-3">
            {
                photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
            }
        </div>
    );
};

export default allphotopage;
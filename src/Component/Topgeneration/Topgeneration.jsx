import PhotoCard from "../PhotoCard/PhotoCard";

const Topgeneration = async () => {
    const res = await fetch(`https://pixgenthree.vercel.app/data.json`);
    const photos = await res.json();
    const topPhotos = photos.slice(0, 8);
    console.log(topPhotos);
    return (
        <div>
            <h2 className="text-3xl font-bold text-center m-5 p-5 ">Top Picture generation</h2>
            <div className="grid grid-cols-4 gap-5">

                {topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}

            </div>
        </div>
    );
};

export default Topgeneration;
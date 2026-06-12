
import { Button, Card, Chip, Separator } from "@heroui/react";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
const PhotoCard = ({ photo }) => {
    return (
        <Card className="border-2">
            <div className="relative w-full aspect-square">
                <Image src={photo.imageUrl} alt="Image" fill className="rounded-2xl"/>
                <Chip className="absolute top-0.5 right-0.5 sm">{photo.category}</Chip>
            </div>
            <div>
                <h1 className="font-bold">{photo.title} </h1>
            </div>

            <div className="flex gap-5">
                <div className="flex items-center">
                    <p><FaHeart /></p>
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation="vertical"></Separator>
                <div className="flex items-center">
                    <p><IoMdDownload /></p>
                    <p>{photo.downloads}</p>
                </div>
            </div>
            <Button variant="outline" className="w-full">
                <Link href={`/allphoto/${photo.id}`}>View</Link>
            </Button>

        </Card>
    );
};

export default PhotoCard;
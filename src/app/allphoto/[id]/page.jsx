import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
const pituredetailshowpage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://pixgenthree.vercel.app/data.json`);
    const data = await res.json();
    const photo = data.find(p => p.id.toString() === id);
    console.log(photo);
    return (
        <div>
            <h1 className="text-center font-black text-3xl m-5 p-5">Picture Detail For Id...{id}</h1>
            <Card className="w-full items-stretch md:flex-row">
                <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                    <Image src={photo.imageUrl} alt="img" height={500} width={500}/>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8">{photo.title}</Card.Title>
                        <Card.Description>
                            {photo.prompt}
                        </Card.Description>
                        <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground">{photo.category}</span>
                            <span className="text-xs text-muted">{photo.model}</span>
                        </div>
                        <Button className="w-full sm:w-auto">Apply Now</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default pituredetailshowpage;
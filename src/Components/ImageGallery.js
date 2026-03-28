import ImageCard from "./ImageCard";
import mountain from "../assets/Images/mountain.jpg"
import forest from "../assets/Images/forest2.jpg"
import boating from "../assets/Images/boating.jpg"
import seaShore from "../assets/Images/sea-shore.jpg"
import garden from "../assets/Images/garden.jpg"
import flower from "../assets/Images/Flower.jpg"
import water from "../assets/Images/water.jpg"
import city from "../assets/Images/city.jpg"

function ImageGallery() {
    const Images = [
        {
            id: 1,
            url: mountain,
            title: "Mountain View",
            description: "Breathtaking peaks touching the sky with beauty."
        },
        {
            id: 2,
            url: forest,
            title: "Forest",
            description: "A calm & green escape filled with nature's freshness."
        },
        {
            id: 3,
            url: boating,
            title: "Boating",
            description: "A relaxing ride across calm and scenic waters."
        },
        {
            id: 4,
            url: seaShore,
            title: "Sea",
            description: "Endless waves dancing under the open sky."
        },
         {
            id: 5,
            url: garden,
            title: "Garden",
            description: "A colorful paradise filled with blooming flowers."
        },
        {
            id: 6,
            url: flower,
            title: "Flower",
            description: "A vibrant bloom spreading beauty and fragrance."
        },
        {
            id: 7,
            url: water,
            title: "Water",
            description: "Crystal clear waters reflecting peace and tranquility."
        },
        {
            id: 8,
            url: city,
            title: "City",
            description: "A lively skyline glowing with modern life and energy."
        }
    ];

    return (
        <>
            <div className="title">Image Gallery</div>
            <div className="gallery">
                {
                    Images.map((image) => (
                    <ImageCard key={image.id} data={image}></ImageCard>
                ))}
                
            </div>
        </>
    )
}

export default ImageGallery;
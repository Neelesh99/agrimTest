import cassiaOriginal from "../assets/original/cassia.jpg"
import cutter from "../assets/original/Cutter1.jpg"
import cassiaMix from "../assets/original/Cassia-Mix.jpg"
import cloves from "../assets/Cloves.png"
import nutmeg from "../assets/original/nutmegOnly.jpg"
import mace from "../assets/original/mace.jpg"
import blackPepper from "../assets/original/blackPepper.jpg"
import clovesStem from "../assets/original/cloveStem.jpg"
import starAnise from "../assets/original/starAnise.jpg"
import longPepper from "../assets/original/LongPepper-1.jpg"
import tumericSlices from "../assets/original/tumericSlices.jpg"
import galangalSlices from "../assets/original/GalangalSlices.png"

export interface ProductData {
    description: JSX.Element,
    imageSrc: string,
    lowerGallery?: JSX.Element,
}

export function findProductData(productName: string): ProductData | undefined {
    if (productName === "cassia") {
        return cassiaDescription()
    }
    if (productName === "cloves") {
        return clovesDescription()
    }
    if (productName === "nutmeg") {
        return nutmegDescription()
    }
    if (productName === "blackPepper") {
        return blackPepperDescription()
    }
    if (productName === "mace") {
        return maceDescription()
    }
    if (productName === "clovesStem") {
        return clovesStemDescription()
    }
    if (productName === "starAnise") {
        return starAniseDescription()
    }
    if (productName === "longPepper") {
        return longPepperDescription()
    }
    if (productName === "tumericSlices") {
        return tumericSlicesDescription()
    }
    if (productName === "galangalSlices") {
        return galangalSlicesDescription()
    }
    return undefined
}

function cassiaElements() {
    return <div>
            A spice made from the bark of the Cinnamomum aromaticum tree.
            Cassia bark (both powdered and in whole, or "stick" form) is used as a flavouring agent for confectionery, desserts, pastries, and meat; it is specified in many curry recipes,
            where Ceylon cinnamon is less suitable. Cassia is sometimes added to Ceylon cinnamon, but is a much thicker,
            coarser product. Cassia is sold as pieces of bark (as pictured below) or as neat quills or sticks.
            Indonesian Cassia sticks can be distinguished from Ceylon cinnamon sticks in the following manner:
            Ceylon cinnamon sticks have many thin layers and can easily be made into powder using a coffee or
            spice grinder, whereas cassia sticks are extremely hard and are usually made up of one thick layer.
        <br/><br/>
        <h6 className="font-bold text-lg">Grades</h6>
        <ul>
            <li>Cassia Vera A and AA cut sticks , 6cm – 60cm</li>
            <li>Cassia A Long sticks</li>
            <li>Cassia Broken - KABC</li>
            <li>Cassia Broken - KBBC</li>
            <li>Cassia Kibbled - 3-8mm</li>
            <li>Cassia TBC (Tea Bag Cut)</li>
            <li>Cassia Granules below 1mm</li>
            <li>Ground Cassia (Variable Mesh Size & Oil content)</li>
        </ul>
    </div>
}

function cassiaLowerGallery() {
    return <div className="flex flex-row space-x-4">
        <img src={cassiaOriginal} className="h-64"/>
        <img src={cutter} className="h-64"/>
    </div>
}

function cassiaDescription() : ProductData {
    return {
        description: cassiaElements(),
        imageSrc: cassiaMix,
        lowerGallery: cassiaLowerGallery()
    }
}

function clovesDescription() {
    return {
        description: <div>Cloves are the aromatic, dried flower buds of a tree. They are native to the Maluku Islands in Indonesia and used as a spice in many cuisines all over the world. Cloves are harvested primarily in Indonesia, Madagascar, Zanzibar, Comoros, and Sri Lanka. They are used in Indian Ayurvedic medicine, Chinese medicine, and western herbalism, and dentistry, where the essential oil is used as an anodyne (painkiller) for dental emergencies.</div>,
        imageSrc: cloves
    }
}

function nutmegDescription() {
    return {
        description: <div>Nutmeg is the actual seed of the tree, roughly egg-shaped and about 20 mm to 30 mm (1 inch) long and 15 mm to 18 mm (¾ inch) wide, and weighing between 5 g and 10 g (¼ ounce and ½ ounce) dried, while mace is the dried "lacy" reddish covering or arillus of the seed.</div>,
        imageSrc: nutmeg
    }
}

function maceDescription() {
    return {
        description: <div>Mace - The nutmeg tree, Myristica fragrans, is special in that it produces two separate spices, nutmeg and Mace. Mace is the ground outer covering (aril) of the nutmeg seed. A piece of unground Mace is called a blade. In its natural state, mace is a bright crimson lace up to 35 mm (1-1/2 in) long, encasing the brown nutmeg in irregular, fleshy lobes. As it is dried, it develops its characteristic aroma but loses its bright red color. The mace can become brittle and horny, though the best quality mace will retain some pliability and release a little oil when squeezed. It grows in Indonesia (Siaw-Ambon and Papua Islands).</div>,
        imageSrc: mace
    }
}

function blackPepperDescription() {
    return {
        description: <div>Black Pepper is the dried berry of Piper nigrum. This vine, which can grow up to ten feet tall, is indigenous to India and Southeast Asia. Pepper are actually berries that are picked about nine months after flowering. Black Pepper, the spiciest, is made from berries that are picked unripe. The berries used for White Pepper are ripened on the vine and soaked so that their outer hulls are easily removed. Green Peppercorns are immature berries that are freeze dried or packed in brine for preservation. Pepper is grown in India, Indonesia, Vietnam, Malaysia, and Brazil.</div>,
        imageSrc: blackPepper
    }
}

function clovesStemDescription() {
    return {
        description: <div>Clove Stem - the stems of cloves collected after picking buds from the trees. It has natural oil, which is extracted and used for medicinal, pharmaceutical, and cosmetic purposes. Clove stem is also used with clove buds for grinding into powder to be used as spices and mixed curry. Clove stems are processed and hand cleaned from any foreign matter and leaves, and then sun dried before packing in PP bags.</div>,
        imageSrc: clovesStem
    }
}

function starAniseDescription() {
    return {
        description: <div>Star Anise is the dried fruit of the Illicium verum tree, native to northeast Vietnam and southern China. This evergreen tree can grow up to 26 feet tall and bears star-shaped fruits, each containing seeds with a licorice-like flavor. The fruits are harvested just before ripening and then dried to enhance their aroma and taste. Star Anise is a key ingredient in Chinese five-spice powder and is also used to flavor dishes in Indian, Vietnamese, and Malaysian cuisines. In addition to its culinary uses, Star Anise is prized for its medicinal properties.</div>,
        imageSrc: starAnise
    }
}

function longPepperDescription() {
    return {
        description: <div>Long Pepper - The tiny berries, which merge into a single, rod-like structure, bear some resemblance to catkins (flowers of trees like hazelnut or willow). It tastes hot and warm, with sweet overtones. The species Piper longum is of South Asian origin and is mostly cultivated in Indonesia (Madura, Java) and Thailand.</div>,
        imageSrc: longPepper
    }
}

function tumericSlicesDescription() {
    return {
        description: <div>Turmeric is the dried root of the plant Curcuma longa. Noted for its bright yellow color, it is related to and similar in size to ginger. Turmeric has been used in Asia for thousands of years and is a major part of Ayurvedic medicine. It was first used as a dye, and then later for its medicinal properties. We offer Indonesian Turmeric Slices that are known for their high quality and high Curcuma content. These slices are well dried with a high curcumin percentage, which is responsible for the bright yellow color that is used as a yellow food colorant and food additive.</div>,
        imageSrc: tumericSlices
    }
}

function galangalSlicesDescription() {
    return {
        description: <div>At first, galangal or 'Khaa' in Thai, appears similar to ginger. However, a closer look will reveal the difference between galangal and ginger. Galangal has a tighter skin, is lighter in color, and can have pinkish portions too. Galangal tastes more like pepper than ginger, even though both grow underground as roots, and the method used to cook them (in various dishes) is similar too. The galangal that originated in Indonesia is also called, lengkuas and has a sharp flavour and pine like aroma. This is more commonly found in fresh or dried (powder) form. The second type of galangal, has a pungent flavour and tastes like a combination of pepper and ginger. It is commonly used as a seasoning ingredient in Thai food and many seafood, meat, and curry dishes.</div>,
        imageSrc: galangalSlices
    }
}
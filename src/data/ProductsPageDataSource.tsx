import cassiaOriginal from "../assets/original/cassia.jpg"
import cloves from "../assets/Cloves.png"
import nutmeg from "../assets/original/nutmegOnly.jpg"
import mace from "../assets/original/mace.jpg"
import blackPepper from "../assets/original/blackPepper.jpg"

export interface ProductData {
    description: JSX.Element,
    imageSrc: string,
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
        <h6 className="font-bold text-lg">Cassia Powder</h6>
            Cassia powder is made up from Broken Cassia chips (KABC or KBBC), which is derived from the bark of
        Cinnamomum aromaticum tree. It is also used as a flavoring agent for confectionery, desserts, pastries, and meat;
        it is specified in many curry recipes, just like Cassia’s other forms.
    </div>
}

function cassiaDescription() : ProductData {
    return {
        description: cassiaElements(),
        imageSrc: cassiaOriginal
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
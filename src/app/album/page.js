import Image from "next/image";
import githubImage from "@/assets/github.webp"
const AlbumPage = () => {
    return (
        <div>
            <h1>This is image component</h1>
            <Image src="https://camo.githubusercontent.com/15106416d4466cefaa576580eca8120a14867fddd3d1a4dd5366c73a8760b9ac/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f4435363136415147534864416a7744465a4a672f70726f66696c652d646973706c61796261636b67726f756e64696d6167652d736872696e6b5f3335305f313430302f302f313731363738333739393834333f653d3137323234373034303026763d6265746126743d30636e4d574a4749674c374c62714d64466a532d523551456445506a4c614462634331467457327a50366b" alt="Shamol Mojumder" height={500} width={500}></Image>            
            <Image src={githubImage} alt="shamol mojumder"height={500} width={500}></Image>
        </div>
    );
};

export default AlbumPage;
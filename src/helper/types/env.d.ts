export{};

declare global{
    namespace NodeJS {
        interface ProcessENV {
            BROWSER: "chrome" | "firefox" | "webkit",
            PCURL: string,
            BCURL: string,
            CCURL: string,
            HEAD: "true" | "false"
        }
    }


}

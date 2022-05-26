import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "e37ncpka",
    dataset: "production",
    apiVersion: "2022-04-20",
    useCdn: false,
});
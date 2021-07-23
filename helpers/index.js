export default function formatArrayEventsToGallery(array) {
    let gallery = [];
    array.forEach(function (item) {
        gallery.push({
            src: item,
            width: 5,
            height: 5,
            sizes: ["(min-width: 320px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        });
    });
    return gallery;
}

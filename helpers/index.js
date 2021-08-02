export default function formatArrayEventsToGallery(array) {
    let gallery = [];
    array.forEach(function (item) {
        const width = item.split("width.")[1].split("height.")[0];
        const height = item.split("height.")[1].split("?")[0];

        gallery.push({
            src: item,
            width: width || 1,
            height: height || 1,
        });
    });
    return gallery;
}

export function formatArrayImagesFromArticle(images) {
    return images.map((image, i) => {
        return { preview: image, id: i };
    });
}

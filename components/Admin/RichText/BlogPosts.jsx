import DeleteIcon from "components/Icons/Delete";
import EditIcon from "components/Icons/Edit";
import Tooltip from "components/Tooltip";

/* Implement function to format date in spanish */
const formatDate = (date) => {
    const d = new Date(date);
    const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} - ${month} - ${year}`;
};

export default function BlogPosts({ data, handleEditPost, handleDeletePost }) {
    if (!data) return null;

    return data.map((blogPost, i) => (
        <tr key={blogPost.id}>
            <th>{i + 1}</th>
            <th>{blogPost.title}</th>
            <th>{formatDate(blogPost.createdAt)}</th>
            <th>
                <button
                    id={blogPost.id}
                    onClick={() => handleEditPost(blogPost)}
                >
                    <Tooltip text="Editar">
                        <EditIcon />
                    </Tooltip>
                </button>

                <button
                    id={blogPost.id}
                    onClick={() => handleDeletePost(blogPost)}
                >
                    <Tooltip text="Eliminar">
                        <DeleteIcon />
                    </Tooltip>
                </button>
            </th>
        </tr>
    ));
}

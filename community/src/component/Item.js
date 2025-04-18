const Item = ({ post }) => {
    return(
    <div>
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>{post.writer}</td>
      <td>{post.date}</td>
      <td>{post.views}</td>
    </tr>
     </div>
    )
}

export default Item;
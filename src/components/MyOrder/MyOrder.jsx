import "./MyOrder.css";
import Table from "../Common/Table";

const MyOrder = () => {
  return (
    <section className="align_center myorder_page">
      <Table headings={["Order", "Products", "Total", "Status"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>iPhone 14 Pro</td>
            <td>$ 999</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrder;

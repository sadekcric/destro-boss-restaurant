import AddItemTable from "../../CommonRoute/AddItemTable";
import SectionTitle from "../../CommonRoute/SectionTitle";

const AddItmes = () => {
  return (
    <div className="mt-10 ">
      <SectionTitle heading={"Add an Item"} subHeading={"---What's New?---"} />

      <AddItemTable />
    </div>
  );
};

export default AddItmes;

"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    try {
      const confirmed = confirm("Are you sure");
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
       if(res.ok){
        router.refresh();
       }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button className="text-red-400" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
}

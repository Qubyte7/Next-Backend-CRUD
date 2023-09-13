export default function EditTopicForm(){
    return(
        <div>
            <form action="">
            <input type="text" className="border border-slate-500 px-8 py-2" placeholder="topic Title" />
            <input type="text" className="border border-slate-500 px-8 py-2" placeholder="topic Description" />
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Topic</button>
        </form>
        </div>
    )
}
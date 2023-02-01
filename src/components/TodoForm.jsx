import { useEffect, useRef } from "react"

const TodoForm = ({ handleSubmitNewTodo }) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const deadlineRef = useRef()

    useEffect(() => {
        titleRef.current.value = ""
        descriptionRef.current.value = ""
        deadlineRef.current.value = ""
    }, [handleSubmitNewTodo])

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-end">
                <span>
                    <input
                        className="h-12"
                        type="text"
                        placeholder="Title"
                        ref={titleRef}
                        defaultValue=""
                    />
                </span>
                <span>
                    <input
                        className="h-12"
                        type="text"
                        placeholder="Description"
                        ref={descriptionRef}
                        defaultValue=""
                    />
                </span>
                <span>
                    <input
                        className="h-12"
                        type="number"
                        name="deadlineRef"
                        placeholder="Deadline"
                        ref={deadlineRef}
                        defaultValue=""
                    />
                </span>
            </div>
            <button
                className="rounded-l-none"
                onClick={() => handleSubmitNewTodo(titleRef.current.value, descriptionRef.current.value, deadlineRef.current.value)}
            >
                Submit
            </button>
        </div>
    )
}

export default TodoForm

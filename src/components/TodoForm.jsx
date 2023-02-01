import { useRef } from "react"

const TodoForm = ({ handleSubmitNewTodo }) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const deadlineRef = useRef()

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-end">
                <span>
                    <input
                        className="h-12"
                        type="text"
                        placeholder="Enter a title..."
                        ref={titleRef}
                    />
                </span>
                <span>
                    <input
                        className="h-12"
                        type="text"
                        placeholder="Enter a description..."
                        ref={descriptionRef}
                    />
                </span>
                <span>
                    <input
                        className="h-12"
                        type="number"
                        name="deadlineRef"
                        placeholder="Enter a deadline..."
                        ref={deadlineRef}
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

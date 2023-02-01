import { useRef } from "react"

const TodoForm = ({ todos, setTodos }) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const deadlineRef = useRef()

    const onClickHandler = () => {
        const todo = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            deadline: deadlineRef.current.value,
            completed: false
        }
        setTodos([todo, ...todos])
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-end">
                <span>
                    <label>Title: </label>
                    <input
                        className="h-12"
                        type="text"
                        placeholder="Enter a title..."
                        ref={titleRef}
                    />
                </span>
                <span>
                    <label>Description: </label>
                    <input
                        className="h-12"
                        type="text"
                        placeholder="Enter a description..."
                        ref={descriptionRef}
                    />
                </span>
                <span>
                    <label>Deadline: </label>
                    <input
                        className="h-12"
                        type="number"
                        name="deadlineRef"
                        placeholder="Enter a deadline..."
                        ref={deadlineRef}
                    />
                </span>
            </div>
            <button className="rounded-l-none" onClick={onClickHandler}>
                Submit
            </button>
        </div>
    )
}

export default TodoForm

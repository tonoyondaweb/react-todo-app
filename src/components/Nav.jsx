import { useState } from "react"

export default function Nav(props) {

    const [activeTab, setActiveTab] = useState(1)

    function selectTab(tab) {
        setActiveTab(tab)
    }

    return (
        <nav className="nav">
            <ul>
                <li 
                style={{color: activeTab === 1 ? "#B68D40" : "#D2BD94"}}
                onClick={() => {
                    selectTab(1)
                    props.handleClick("active")
                }}
                >
                    Active
                </li>
                <li 
                style={{color: activeTab === 2 ? "#B68D40" : "#D2BD94"}}
                onClick={() => {
                    selectTab(2)
                    props.handleClick("completed")
                }}
                >
                    Completed
                </li>
                <li 
                style={{color: activeTab === 3 ? "#B68D40" : "#D2BD94"}}
                onClick={() => {
                    selectTab(3)
                    props.handleClick("all")
                }}
                >
                    All
                </li>
            </ul>
        </nav>
    )
}
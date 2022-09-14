import { useState } from "react"

export default function Nav() {

    const [activeTab, setActiveTab] = useState(1)

    function selectTab(tab) {
        setActiveTab(tab)
    }

    return (
        <nav className="nav">
            <ul>
                <li 
                style={{color: activeTab === 1 ? "#B68D40" : "#D2BD94"}}
                onClick={(event) => selectTab(1)}
                >
                    All
                </li>
                <li 
                style={{color: activeTab === 2 ? "#B68D40" : "#D2BD94"}}
                onClick={(event) => selectTab(2)}
                >
                    Active
                </li>
                <li 
                style={{color: activeTab === 3 ? "#B68D40" : "#D2BD94"}}
                onClick={() => selectTab(3)}
                >
                    Completed
                </li>
            </ul>
        </nav>
    )
}
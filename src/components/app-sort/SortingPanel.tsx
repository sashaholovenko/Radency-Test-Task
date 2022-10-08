import React, {Dispatch, SetStateAction} from 'react';
import './SortingPanel.css'

interface SortOptionProps {
    sortOption: string,
    setSortOption: Dispatch<SetStateAction<"alphabet" | "count">>
}

const SortingPanel: React.FC<SortOptionProps> = ({setSortOption, sortOption}) => {



    return (
        <div className="sort__panel">
            <h3>Sort by:</h3>
            <select value={sortOption} onChange={e => setSortOption(e.target.value as "alphabet" | "count")}>
                <option value="alphabet">By alphabet</option>
                <option value="count">By count</option>

            </select>
        </div>
    );
};

export default SortingPanel;
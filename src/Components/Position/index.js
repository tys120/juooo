import React from 'react'
import css from "./index.module.scss"

class Position extends React.Component{
    render(){
        return <div className={css.position}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAMAAACEqFxyAAAAXVBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7ro0NvAAAAHnRSTlMA+eslChdO2MS2h29oVjqAdu/e27qvpYxbQi0HAUsWcjORAAAAt0lEQVQoz2WR2Q6EMAhFEetarbuOy/D/nzkRadHxvBBOGugNcJG0IxLh2CagmCUiIVqMt3FGN7JYLNIDZG/krZKdc0p6UQIksq23ztle9iZgiZkMD5yIsVBwHYx8deC2AORagVBdnwFiNq83YkTHIZrojkvtdc1tBznX/LjsIS00IQFotsYPo8LtuysorJrpxXxeAP8t8i3W6GmjFZj2qRtNfKOCQKq3TNWq57hv/1GjXq3yRdQJP70QJWgxEHBwAAAAAElFTkSuQmCC" alt="position"/>
                <span>全国</span>
            </div>
    }
}

export default Position
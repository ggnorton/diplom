import React from 'react';
import './wrapper.css';
import Header from "../Header/Header";
import { connect } from 'react-redux'
import Subsection from '../Subsection/Subsection.js'

const Section = (props) => {
    let style = {
        height: `${props.height}vh`,
        width: `${props.width}%`,
    }
	return (
		<div className="section" style={style}>
			{props.subSections.map(subSection => {
				return <Subsection  id={subSection.subSectionId} 
									sectionId={subSection.sectionId} 
									key={subSection.subSectionId}/>
			})}
		</div>
	)
}

class Wrapper extends React.Component{
    render() {
        return(
            <div className="wrapper">
                {
                	this.props.sections.map(section => <Section id={section.id} 
                												width={section.width}
                												height={section.height}
                												subSectionsCount={section.subSectionsCount} 
                												subSections={section.subSections}
                												key={section.id} />)
            	}
            </div>
        )
    }
}

const mapStateToProps = state => ({
	sections: state
})

export default connect(
	mapStateToProps,
	null
)(Wrapper)
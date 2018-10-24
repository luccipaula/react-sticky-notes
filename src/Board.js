import React, { Component } from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: 0,
                    note: "Call Merlin"
                },
                {
                    id: 1,
                    note: "Learn React"
                },
                {
                    id: 2,
                    note: "Walk the doggo"
                },
                {
                    id: 3,
                    note: "Apply for jobs"
                },
                {
                    id: 4,
                    note: "Buy more ramen"
                },
                {
                    id: 5,
                    note: "Design business cards"
                },
                {
                    id: 6,
                    note: "Do yoga"
                },
                {
                    id: 7,
                    note: "Update this app"
                },
                {
                    id: 8,
                    note: "Push this to GitHub"
                },
                {
                    id: 9,
                    note: "Be happy"
                },
            ]
        }
        this.add = this.add.bind(this)
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.nextId = this.nextId.bind(this)
    }

    add(text) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
        }))
    }

    nextId() {
        //Updates more than one note by accident
        //this.uniqueId = this.uniqueId || 0
        //return this.uniqueId++

        var mapping = this.state.notes.map(note => parseInt(note.id))
        var max = Math.max(...mapping)
        return max + 1
    }

    update(newText, i) {
		console.log('updating item at index', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
	}

    remove(id) {
        console.log('removing item at', id)
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }

    eachNote(note, i) {
        return (
            <Note key={note.id}
                  index={note.id}
                  onChange={this.update}
                  onRemove={this.remove}>
                  {note.note}
            </Note>
        )
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.add.bind(null, "New Note")}
                        id="add">
                    <FaPlus />
                </button>
            </div>
        )
    }
}

export default Board
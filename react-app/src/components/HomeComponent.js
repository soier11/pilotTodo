import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
      activeColor: 0,
      input: '',
      items: [
        { id: 1, text: '리액트 소개', checked: false },
        { id: 2, text: 'JSX 사용해보기', checked: true },
        { id: 3, text: '라이프 사이클 이해하기', checked: false },
      ],
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleColorChange = index => () => {
    this.setState({
      activeColor: index,
    });
  };

  handleToggle = (id) => {
    const { items } = this.state;
    const index = items.findIndex(item => item.id === id);

    const selected = items[index];

    this.setState({
      items: [
        ...items.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...items.slice(index + 1, items.length)
      ]
    });
  }

  handleCreate = () => {
    const { input, items, activeColor, palettes } = this.state;
    if (input.trim().length === 0) {
      return true;
    }
    console.log(this.id)
    const item = {
        id: ++this.id,
        text: input,
        checked: false
    }
    if (activeColor !== 0) {
      item.color = palettes[activeColor];
    }
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      items: items.concat(item)
    });
  }

  handleRemove = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.filter(item => item.id !== id)
    });
  }

  render() {
    const { classes } = this.props;

    console.log(this.state.items)

    const draw_todo_item = (item, index) => {
      this.id = item.id;
      return (
        <div key={index} className={classes.todoItem} onClick={() => this.handleToggle(item.id)}>
          <div
            className={'todoRemove'}
            onClick={e => {
              e.stopPropagation(); // onToggle 이 실행되지 않도록 함
              this.handleRemove(item.id)}}
          >×</div>
          <div className={`${classes.todoText} ${item.checked}`}>
            <div style={{color: item.color ? item.color : '#343a40'}}> {item.text}</div>
          </div>
          {item.checked && <div className="check-mark">✓</div>}
        </div>
      );
    };

    return (
      <div>
        <section className={classes.title}>오늘 할 일</section>
        <section className={classes.paletteWrapper}>
          <div className={classes.palette}>
            {this.state.palettes.map((palette, index) => (
              <div
                key={index}
                className={`${classes.color}
                ${this.state.activeColor === index && 'active'}`}
                style={{ background: palette }}
                onClick={this.handleColorChange(index)}
              />
            ))}
          </div>
        </section>
        <section className={classes.formWrapper}>
          <div className={classes.form}>
            <TextField
              id="standard-name"
              label="할 일"
              className={classes.textField}
              value={this.state.input}
              onChange={this.handleChange('input')}
              margin="normal"
              style={{ color: this.state.palettes[this.state.activeColor] }}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.handleCreate()}
            >
              추가
            </Button>
          </div>
        </section>
        <div>
          {this.state.items.map((item, index) => (
            draw_todo_item(item, index)
          ))}
        </div>
      </div>
    );
  }
}

export default HomeComponent;

import React, { useReducer } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../store/actions';
import { courses, INITIAL_STATE } from '../../store';

const CourseList = () => {
	// usando hooks do react-redux (useSelector)
	const data = useSelector(state => state.data);
	const dispatch = useDispatch();

	//usando hooks do react (useReducer)
	const [{ data }, dispatch] = useReducer(courses, INITIAL_STATE);

	addTodo = () => dispatch(add('teste'));

	return (
		<View>
			{data.map(item => (
				<Text key={item}>{item}</Text>
			))}

			<Button title="Novo Curso" onPress={addTodo} />
		</View>
	);
};

export default CourseList;

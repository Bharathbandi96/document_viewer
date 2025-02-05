import "@testing-library/jest-dom";
import { filterData, generateId, handleSort, stringSort } from '../utilities'
import {input, filteredOutput, outputAscending, outputDescending} from './test_data';

test('Generate unique ID', () => {
    const id1 = generateId();
    const id2 = generateId();

    expect(typeof id1).toBe('string')

    expect(id1).not.toBe(id2)

    expect(id1).toHaveLength(8)
})

test('Sorting elements based on string value', () => {

    expect(stringSort(input)).toEqual(outputAscending);

    expect(handleSort(input, true)).toEqual(outputAscending);

    expect(handleSort(input, false)).toEqual(outputDescending);

});

test('Filter file data based on key string', () => {
    expect(filterData(input, 'Project')).toEqual(filteredOutput)
})
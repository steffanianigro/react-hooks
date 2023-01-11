import React from 'react';
import { render, screen, renderHook, act } from '@testing-library/react';
import App from './App';
import {useLocalStorage} from './hooks/useLocalStorage';
import {Control} from "./components/Control";
import {Display} from "./components/Display";


beforeEach(() => {
  localStorage.clear();
});

it("should correctly set localStorage", () => {
  const { result } = renderHook(() => useLocalStorage<string>("test", "value"));
  const [defaultValue, setValue ] = result.current;
  expect(defaultValue).toEqual("value");
  const initialValue = localStorage.getItem("test");
  expect((initialValue !== null) ? JSON.parse(initialValue) : initialValue).toEqual("value");
  act(() => {
    setValue("newValue");
  });
  const newValue = localStorage.getItem("test");
  expect((newValue !== null) ? JSON.parse(newValue) : newValue).toEqual("newValue");
});

test('Should throw error when useSettingsContext used outside of context', () => {
  expect(() => {
    render(
        <Control/>
    )
  }).toThrow('Settings has been used outside of Context.');

  expect(() => {
    render(
        <Display/>
    )
  }).toThrow('Settings has been used outside of Context.');
})
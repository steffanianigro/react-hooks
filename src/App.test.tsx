import React from 'react';
import { render, screen, renderHook, act } from '@testing-library/react';
import App from './App';
import {useLocalStorage} from './useLocalStorage';
import {useSettingsContext} from "./useSettingsContext";

beforeEach(() => {
  localStorage.clear();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
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

it("should correctly set settingsContext", () => {
  const { result } = renderHook(() => useSettingsContext({
    volume: 1,
    currentSong: "Cool Song",
    analyticsOn: true
  }));
  const [settingsContext, setVolume, setCurrentSong, setAnalyticsOn ] = result.current;
  expect(settingsContext).toEqual({
    volume: 1,
    currentSong: "Cool Song",
    analyticsOn: true
  });
  act(() => {
    setVolume(2);
  });
  expect(result.current[0].volume).toEqual(2);
  act(() => {
    setCurrentSong("Cool Song 2");
  });
  expect(result.current[0].currentSong).toEqual("Cool Song 2");
  act(() => {
    setAnalyticsOn(false);
  });
  expect(result.current[0].analyticsOn).toBeFalsy();
});
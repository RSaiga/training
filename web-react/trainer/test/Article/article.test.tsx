// @ts-ignore
import React from "react";
import {render, screen} from "@testing-library/react";
import {Articles} from "../../src/Article/articles";

describe('test', () => {
  it('should test', function () {
    render(<Articles/>)
    expect(screen.getByText('記事一覧')).toBeInTheDocument();
    expect(screen.getByText('記事１')).toBeInTheDocument();
    expect(screen.getByText('記事２')).toBeInTheDocument();
  });
})
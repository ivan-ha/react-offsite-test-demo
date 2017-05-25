import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ListViewItem from '../../src/components/list-view-item';

describe("ListViewItem", () => {
    const article = {
        image: "https://someDomain/someImage.jpg",
        title: "Some Title",
        preview: "Some preview text",
        url: "https://someDomain/someArticle"
    };
    const wrapper = shallow(
        <ListViewItem
            article={article}/>
    );

    it("should display correct image", () => {
        expect(wrapper.find(".list-view-img").prop("src")).to.equal("https://someDomain/someImage.jpg");
    });

    it("should display correct title", () => {
        expect(wrapper.find(".media-heading").text()).to.equal("Some Title");
    });

    it("should display correct text", () => {
        expect(wrapper.find(".media-body").childAt(1).text()).to.equal("Some preview text");
    });

});

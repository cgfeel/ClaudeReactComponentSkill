import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BookmarkCard } from "./index";
import type { BookmarkCardProps } from "./types";

/**
 * BookmarkCard 组件测试套件
 * 验证组件渲染、Props 传递、边界情况
 */
describe("BookmarkCard Component", () => {
  const defaultProps: BookmarkCardProps = {
    title: "GitHub Homepage",
    url: "https://github.com",
    description: "GitHub is where over 150 million developers shape the future of software.",
    tags: ["code", "version control"],
  };

  /**
   * 渲染测试：验证组件核心元素正常显示
   */
  test("renders all core elements (title, url, description, tags)", () => {
    render(<BookmarkCard {...defaultProps} />);

    // 验证标题
    expect(screen.getByText("GitHub Homepage")).toBeInTheDocument();
    // 验证 URL
    expect(screen.getByText("https://github.com")).toBeInTheDocument();
    // 验证描述
    expect(screen.getByText(/GitHub is where over 150 million/)).toBeInTheDocument();
    // 验证标签
    expect(screen.getByText("code")).toBeInTheDocument();
    expect(screen.getByText("version control")).toBeInTheDocument();
  });

  /**
   * Props 传递测试：验证自定义 Props 能正确渲染到 DOM
   */
  test("displays custom props correctly", () => {
    const customProps: BookmarkCardProps = {
      title: "React Documentation",
      url: "https://react.dev",
      description: "The library for web and native user interfaces.",
      tags: ["react", "docs", "frontend"],
    };

    render(<BookmarkCard {...customProps} />);

    expect(screen.getByText("React Documentation")).toBeInTheDocument();
    expect(screen.getByText("https://react.dev")).toBeInTheDocument();
    expect(screen.getByText(/The library for web and native/)).toBeInTheDocument();
    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("docs")).toBeInTheDocument();
    expect(screen.getByText("frontend")).toBeInTheDocument();
  });

  /**
   * 边界测试：无描述时不渲染描述区域
   */
  test("does not render description when not provided", () => {
    const props = { ...defaultProps, description: undefined };
    render(<BookmarkCard {...props} />);

    expect(screen.queryByText(/GitHub is where over 150 million/)).not.toBeInTheDocument();
  });

  /**
   * 边界测试：标签为空时不渲染标签区域
   */
  test("does not render tags when tags array is empty", () => {
    const props = { ...defaultProps, tags: [] };
    render(<BookmarkCard {...props} />);

    expect(screen.queryByText("code")).not.toBeInTheDocument();
    expect(screen.queryByText("version control")).not.toBeInTheDocument();
  });

  /**
   * 边界测试：className 能正确合并到容器元素
   */
  test("applies custom className to container", () => {
    const { container } = render(<BookmarkCard {...defaultProps} className="custom-class" />);
    const root = container.firstChild as HTMLElement;

    expect(root.className).toContain("custom-class");
  });
});

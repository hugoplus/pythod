import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Image from "next/image";

export default {
    project: {
        link: "https://github.com/hugoplus/pythod",
    },
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter();
        const { frontMatter } = useConfig();
        const url =
            "https://www.pythod.com" +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

        return (
            <>
                <title>
                    {frontMatter.title
                        ? `${frontMatter.title} | Pythod`
                        : "Pythod"}
                </title>
                <meta property="og:url" content={url} />
                <meta
                    property="og:title"
                    content={
                        frontMatter.title
                            ? `${frontMatter.title} | Pythod`
                            : "Pythod"
                    }
                />
                <meta
                    property="og:description"
                    content={
                        frontMatter.description ||
                        "A place for Python learners."
                    }
                />
            </>
        );
    },
    logo: (
        <>
            <Image
                src="/assets/images/favicon-32x32.png"
                alt="Pythod"
                width={24}
                height={24}
            />
            <span style={{ marginLeft: ".4em", fontWeight: 600 }}>
                Pythod | 循序渐进学 Python
            </span>
        </>
    ),
    sidebar: {
        autoCollapse: true,
        defaultMenuCollapseLevel: 1,
    },
    editLink: {
        component: () => null,
    },
    feedback: {
        content: null,
    },
    footer: {
        text: (
            <span>
                <a href="https://www.pythod.com" target="_blank">
                    Pythod
                </a>{" "}
                ©{` ${new Date().getFullYear()}. All rights reserved.`}
            </span>
        ),
    },
};

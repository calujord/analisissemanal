export interface HomeModel {
    youtube: null;
    banners: Banner[];
    last_editions: Edition[];
    edition_by_category: EditionByCategory[];
}
export interface GeneralEdition {
    edition_es: Edition;
    edition_en: Edition;
    edition_related_es: Edition[];
    edition_related_en: Edition[];
}

export interface Banner {
    pk: number;
    title: string;
    image: string;
}

export interface EditionByCategory {
    category: Category;
    editions: Edition[];
}

export interface Category {
    pk: number;
    name: string;
    language: Language;
}

export interface Language {
    pk: number;
    code: string;
    name: string;
    country_code: string;
}

export interface EditionRead {
    edition: Edition;
    status_access: string;
}
export interface Edition {
    pk: number;
    publication_date: string;
    title: string;
    source: string;
    description: string;
    tags: string;
    price: number;
    cover: string;
}
export interface CategoryList {
    object_list: CategoryModel[];
    number: number;
    page_size: number;
    count: number;
    total: number;
    num_pages: number;
}

export interface CategoryModel {
    pk: number;
    name: string;
    language: Language;
}

export interface EditionList {
    edition: Edition[];
    number: number;
    page_size: number;
    count: number;
    total: number;
    num_pages: number;
}


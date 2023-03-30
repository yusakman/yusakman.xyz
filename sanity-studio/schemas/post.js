// schemas/pet.js
export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      group: 'meta',
      name: 'meta_title',
      type: 'string',
      title: 'Meta Title',
      validation: Rule => Rule.required(),
    },
    {
      group: 'content',
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      group: 'content',
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      validation: Rule => Rule.required(),
    },
    {
      group: 'content',
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      group: 'content',
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: Rule => Rule.required(),
    },
    {
      group: 'content',
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      group: 'content',
      name: 'body',
      type: 'array',
      title: 'Body Content',
      of: [{type: 'block'}, {type: 'image'}],
    },
  ],
}

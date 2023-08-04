'use client';

import { ActionIcon, createStyles, rem, TextInput, useMantineTheme } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
	root: {
		position: 'relative',
	},

	input: {
		height: rem(54),
		paddingTop: rem(18),
		marginBottom: rem(18),
	},

	label: {
		position: 'absolute',
		pointerEvents: 'none',
		fontSize: theme.fontSizes.xs,
		paddingLeft: theme.spacing.sm,
		paddingTop: `calc(${theme.spacing.sm} / 2)`,
		zIndex: 1,
	},
}));

export type ISimpleInputProps = {
	label: string;
	placeholder: string;
	name: string;
};
export function SimpleInput(props: ISimpleInputProps) {
	const { classes } = useStyles();
	const theme = useMantineTheme();
	return <TextInput classNames={classes} radius="md" size="md" {...props}></TextInput>;
}

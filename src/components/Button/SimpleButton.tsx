'use client';

import { useState } from 'react';
import { useInterval } from '@mantine/hooks';
import { createStyles, Button, Progress, rem } from '@mantine/core';

const useStyles = createStyles(theme => ({
	button: {
		position: 'relative',
		transition: 'background-color 150ms ease',
		marginTop: rem(15),
	},

	label: {
		position: 'relative',
		zIndex: 1,
	},
}));

export function SimpleButton(props: any) {
	const { classes, theme } = useStyles();

	return (
		<Button fullWidth className={classes.button} color={props.color}>
			<div className={classes.label}>{props.label}</div>
		</Button>
	);
}

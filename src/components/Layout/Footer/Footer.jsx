import React from 'react';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiWorldOutline,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <Box padding={'3'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size={'sm'}
            children="@Kartik gamot"
            color={'yellow.400'}
          />
        </VStack>
        <HStack
          spacing={['2', '6']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'30'}
        >
          <a href="https://www.linkedin.com/in/kartik-gamot-a6b27b207/" target={'_blank'}>
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://github.com/kart09" target={'_blank'}>
            <TiSocialGithubCircular />
          </a>
         
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
